import client from "../../client"
import bcrypt from "bcrypt"

export default{
    Mutation:{
        editProfile: async(_, {firstName,lastName,username,email,password}) => {
            let uglyPassword = null;
            if(password){
                uglyPassword = await bcrypt.hash(newPassord, 10);
            }
            const ok = await client.user.update({
                where:{
                    id: 1,
                },
                data:{
                    firstName, lastName, username, email, ...(uglyPassword && {password : uglyPassword}),
                },
            });
            if(ok){
                return{ok: true,}
            }else{
                return{ok: false, error:"Could not update profile."}
            }
        }
    }
}