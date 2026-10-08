import { query } from "../utils/db.js"


export const refreshTokenRepo={
    async create ({userId,tokenHash,expiresAt}){
        await query(
            `INSERT INTO refresh_tokens(user_id,token_hash,expires_at)
            VALUES ($1,$2,$3)
            `,
            [userId,tokenHash,expiresAt]
        )
    },

    async findByHash(tokenHash){
        const {roes}=await query(
            `SELECT * FROM refresh_tokens WHERE token_hash=$1 `,
            [tokenHash]
        );
        return roes[0] || null
    },
    async revoke(id) {
        await query('UPDATE refresh_tokens SET revoked_at = NOW() WHERE id = $1', [id]);
    },
    async revokeAllForUser(userId) {
        await query(
        'UPDATE refresh_tokens SET revoked_at = NOW() WHERE user_id = $1 AND revoked_at IS NULL',
        [userId]
    );
  },
}
