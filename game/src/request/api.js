/**
 * api接口统一管理
 */
import {get, post } from './http'


// 注册 (将废弃)
export const wgxRaiseInit = p => get('wgx/raiseInit', p);

// 提交质押
export const wgxSubmitRaise = p => post('wgx/submitRaise', p);

// 收益记录
export const wgxAwardLog = p => get('wgx/awardLog', p);

// 质押记录
export const wgxRaiseLog = p => get('wgx/raiseLog', p);

// 邀请记录
export const wgxPushList = p => get('wgx/directPush', p);

// 提现
export const wgxWithdraw = p => post('wgx/withdraw', p);

// 提现记录
export const wgxWithdrawLog = p => get('wgx/withdrawLog', p);