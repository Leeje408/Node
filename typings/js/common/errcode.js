/* '10xx' is Params ErrorCode
 * '20xx' is Mysql ErrorCode
 */
var errcode = {
  '1001': 'Params Missing.',
  '1002': 'Params Wrong.',
  '2001': '[Mysql] the Config of Mysql Connect is Missing.',
  '2002': '[Mysql] Connecting Failure.'
}

// Except a ErrCode to GetErrMessage
function getErrMessage (code) {
  if (!code) throw new Error(getErrMessage(1001))
  return errcode[code]
}

exports.getErrMessage = getErrMessage
