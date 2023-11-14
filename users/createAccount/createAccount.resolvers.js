import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import client from "../../client";

export default{
    Mutation:{
        createAccount: async(_,{firstName, lastName, username, email, password}) => {
            try{
                // check if username or email are already on DB.
                const existingUser = await client.user.findFirst({
                    where:{
                        OR:[
                            {
                                username,
                            },
                            {
                                email,
                            },
                        ],
                    },
                });
                
                if(existingUser){
                    throw new Error("이미 사용중인 아이디 또는 비밀번호입니다.")
                }
                // hash password
                const uglyPassword = await bcrypt.hash(password, 10);
                return client.user.create({
                    data: {
                    username,
                    email,
                    firstName,
                    lastName,
                    password: uglyPassword,
                    },
                });
                // save and return the user 
            } catch(e){
                return email;
            }
        },
    },


}