package logic

import (
	"context"

	"blog/api/internal/svc"
	"blog/api/internal/types"
	"blog/rpc/user/types/user"

	"github.com/zeromicro/go-zero/core/logx"
)

type LoginLogic struct {
	logx.Logger
	ctx    context.Context
	svcCtx *svc.ServiceContext
}

func NewLoginLogic(ctx context.Context, svcCtx *svc.ServiceContext) *LoginLogic {
	return &LoginLogic{
		Logger: logx.WithContext(ctx),
		ctx:    ctx,
		svcCtx: svcCtx,
	}
}

func (l *LoginLogic) Login(req *types.ReqLoginUser) (*types.RespLoginUser, error) {
	resp, err := l.svcCtx.UserRpc.Login(l.ctx, &user.ReqLoginUser{Username: req.Username, Password: req.Password})
	if err != nil {
		return nil, err
	}

	return &types.RespLoginUser{Token: resp.Token}, nil
}
