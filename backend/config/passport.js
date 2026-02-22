const passport = require("passport");
const User = require("../Models/User");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const options = {
    secretOrKey:"manohar",
    jwtFromRequest: ExtractJwt.fromExtractors([(req)=>req?.cookies?.token])
}

passport.use(new JwtStrategy(options,async(payload,done)=>{
    try{
        const user = await User.findOne({name:payload.name});
        if(user){
            return done(null,user);
        }
        return done(null,false);
    }catch(err){
        return done(err,false);
    }
}))
