package main

import (
	"context"
	"fmt"

	"github.com/gin-gonic/gin"
	"github.com/redis/go-redis/v9"
)

var rdb *redis.Client
var ctx = context.Background()

func main() {
	fmt.Println("run main,测试clear")
	initRedis()
	r := gin.Default()
	r.GET("/test", func(c *gin.Context) {
		fmt.Println("hello")
		rdb.Set(ctx, "key", "zzz", 0)
		val, err := rdb.Get(ctx, "key").Result()
		if err != nil {
			c.JSON(200, gin.H{
				"error": err.Error(),
			})

		} else {
			c.JSON(200, gin.H{
				"message": "Hello," + val,
			})

		}

	})
	r.Run(":80")
}

func initRedis() {
	rdb = redis.NewClient(&redis.Options{
		Addr:     "redis:6379", // 这里需要使用compose中的service name作为地址
		Password: "",
		DB:       0,
	})
	// pong, err := rdb.Ping(ctx).Result()
	// fmt.Println(pong, err)
}
