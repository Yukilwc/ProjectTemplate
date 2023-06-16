package model

import (
	"github.com/zeromicro/go-zero/core/stores/sqlx"
)

var _ ZeroUserModel = (*customZeroUserModel)(nil)

type (
	// ZeroUserModel is an interface to be customized, add more methods here,
	// and implement the added methods in customZeroUserModel.
	ZeroUserModel interface {
		zeroUserModel
	}

	customZeroUserModel struct {
		*defaultZeroUserModel
	}
)

// NewZeroUserModel returns a model for the database table.
func NewZeroUserModel(conn sqlx.SqlConn) ZeroUserModel {
	return &customZeroUserModel{
		defaultZeroUserModel: newZeroUserModel(conn),
	}
}
