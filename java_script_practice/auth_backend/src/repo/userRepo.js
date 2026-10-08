import { query } from "../utils/db.js"



export const userRepo={
    async findByEmail(email){
       const {rows} =await query("SELECT * FROM user WHERE email=$1",[email])
        return rows[0] || null
    },

    async findById(id){
       const {rows} =await query("SELECT * FROM user WHERE id=$1",[id])
        return rows[0] || null;
    },

    async create({name,email,passowrd}){
        const {rows}=await query(
            
            `INSERT INTO user(name, email,password_hash)
            VALUES ($1,$2,$3)
            RETURNING *,
            `
            [name,email,password]
        );

        return rows[0] || null;
    },

    async saveRestToken(userId,tokenHash,expiresAt){
        await query(
            `UPDATE users
                SET rest_password_token_hash=$2,
                    reset_password_expires_at=$3,
                    updated_at=NOW()
                WHERE id=$1
            `
            [userId,tokenHash,expiresAt]
        );
    },


}