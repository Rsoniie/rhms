
// import Parent from "../models/parentModel.js";
// import User from "../models/userModel.js";

// const alertHandler = async (req, res) => {

//     try {

//         const parents = await Parent.find();
//         parents?.forEach(async(parent) => {
//             const users = parent.userIds;
//             users.forEach(async(ids) => {
//                 const user =  await User.findById(ids);
//                 console.log("User from parent", user.username);
//                 const critical = criticalCheck(user.health_data);
//                 if (critical) {
//                     console.log("Critical alert for user:", user.username);
//                 }                
//             });

//             return res.status(200).json({"message": "Alert processed successfully" });
//         });
//     } catch (error) {
//         return res.status(500).json({ message: "Internal server error", error: error.message });
//     }
// }

// export default alertHandler;