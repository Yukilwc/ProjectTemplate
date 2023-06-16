package logic

import (
	"context"
	"fmt"

	"blog/rpc/user/internal/svc"
	"blog/rpc/user/user"

	"github.com/pkg/errors"
	"github.com/zeromicro/go-zero/core/logx"
	"github.com/zeromicro/go-zero/core/stores/sqlc"
)

type LoginLogic struct {
	ctx    context.Context
	svcCtx *svc.ServiceContext
	logx.Logger
}

func NewLoginLogic(ctx context.Context, svcCtx *svc.ServiceContext) *LoginLogic {
	return &LoginLogic{
		ctx:    ctx,
		svcCtx: svcCtx,
		Logger: logx.WithContext(ctx),
	}
}

func (l *LoginLogic) Login(in *user.ReqLoginUser) (*user.RespLoginUser, error) {
	l.Logger.Info("Login in login logic", in)
	one, err := l.svcCtx.Model.FindOneByUsername(l.ctx, in.Username)
	if err != nil {
		if errors.Is(err, sqlc.ErrNotFound) {
			return &user.RespLoginUser{
				Code:  2,
				Msg:   "用户名不存在",
				Token: "",
			}, nil
		} else {
			return &user.RespLoginUser{
				Code:  3,
				Msg:   errors.Wrapf(err, "查找用户名: %s，", in.Username).Error(),
				Token: "",
			}, nil

		}

	}
	if one.Password != in.Password {
		return nil, fmt.Errorf("user or password is invalid")
	}
	token := GenTokenByHmac(one.Username, "")
	return &user.RespLoginUser{
		Token: token,
	}, nil
}

// func HmacCrypto(s, key string) string {
// 	hc := hmac.New(sha1.New, []byte(key))
// 	token := hc.Sum([]byte(s))
// 	return hex.EncodeToString(token)
// }

func GenTokenByHmac(s, key string) string {
	// return fmt.Sprintf("%s,%s", s, HmacCrypto(s, key))
	return "token"
}
