import jwt from 'jsonwebtoken'

const secret: jwt.Secret = 'chave-jwt'

export const jwtService = {
  signToken: (payload: string | object | Buffer, expiration: string) => {
    // @ts-ignore
    return jwt.sign(payload, secret, { expiresIn: expiration });
  },
  verifyToken: (token: string, callbackfn: jwt.VerifyCallback) => {
    jwt.verify(token, secret, callbackfn)
  }
};