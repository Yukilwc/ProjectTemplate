package main

import (
	"flag"
	"fmt"

	"blog/rpc/user/internal/config"
	"blog/rpc/user/internal/server"
	"blog/rpc/user/internal/svc"
	"blog/rpc/user/types/user"

	"github.com/zeromicro/go-zero/core/conf"
	"github.com/zeromicro/go-zero/core/service"
	"github.com/zeromicro/go-zero/zrpc"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

var configFile = flag.String("f", "etc/user.yaml", "the config file")

func main() {
	flag.Parse()

	var c config.Config
	conf.MustLoad(*configFile, &c)
	// 构造上下文，并把配置注入ctx中
	// 该上下文主要包含了config，model
	ctx := svc.NewServiceContext(c)
	// 通过config中的rpc服务配置，启动服务
	s := zrpc.MustNewServer(c.RpcServerConf, func(grpcServer *grpc.Server) {
		// 为启动的服务，注册业务服务，业务服务就是proto中定义的services
		user.RegisterUserServer(grpcServer, server.NewUserServer(ctx))

		if c.Mode == service.DevMode || c.Mode == service.TestMode {
			reflection.Register(grpcServer)
		}
	})
	defer s.Stop()

	fmt.Printf("Starting rpc server at %s...\n", c.ListenOn)
	s.Start()
}
