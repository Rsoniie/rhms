import generateRandomHealthData from "../utils/genData.js";
import User from "../models/userModel.js";
import evaluateHealthCondition from "../utils/criticalCheck.js";

const addAll = async (req, res) => { 
    try {
        const users = await User.find();
        const updatedUsers = await Promise.all(
            users.map(async (user) => {
            const healthData = generateRandomHealthData();
            
            console.log("before critical");
            console.log("This is healthData", healthData);
            const critical = evaluateHealthCondition(healthData);
            console.log(critical);
            // const critical  = "Normal";

            healthData["condition"] = critical;

        
            user.health_data.push(healthData);
            if (user.health_data.length > 10) {
                user.health_data = user.health_data.slice(-10);
            }
        

            return await user.save();
            })
        );
        return res.status(200).json({ message: "All users updated successfully", updatedUsers });
    } catch (error) {
        return res.status(500).json({ message: "Error updating users", error });
    }
}
export default addAll;



