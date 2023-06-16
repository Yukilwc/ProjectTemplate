package svc

import (
	"blog/rpc/model"
	"blog/rpc/user/internal/config"

	"github.com/zeromicro/go-zero/core/stores/sqlx"
)

type ServiceContext struct {
	Config config.Config
	Model  model.ZeroUserModel
}

func NewServiceContext(c config.Config) *ServiceContext {
	return &ServiceContext{
		Config: c,
		Model:  model.NewZeroUserModel(sqlx.NewMysql(c.DataSource)),
	}
}
