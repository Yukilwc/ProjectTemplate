package logic

import (
	"context"
	"database/sql"

	"blog/rpc/model"
	"blog/rpc/user/internal/svc"
	"blog/rpc/user/types/user"

	"github.com/zeromicro/go-zero/core/logx"
)

type AddLogic struct {
	ctx    context.Context
	svcCtx *svc.ServiceContext
	logx.Logger
}

func NewAddLogic(ctx context.Context, svcCtx *svc.ServiceContext) *AddLogic {
	return &AddLogic{
		ctx:    ctx,
		svcCtx: svcCtx,
		Logger: logx.WithContext(ctx),
	}
}

func (l *AddLogic) Add(in *user.ReqAddUser) (*user.MsgResp, error) {
	_, err := l.svcCtx.Model.Insert(l.ctx, &model.ZeroUser{
		Username: in.Username,
		Password: in.Password,
		Email:    sql.NullString{Valid: true, String: in.Email},
	})
	if err != nil {
		return nil, err
	}

	return &user.MsgResp{
		Code: 1,
		Msg:  "注册成功",
	}, nil
}
