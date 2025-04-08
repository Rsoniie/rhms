import generateRandomHealthData from "../utils/genData.js";
import User from "../models/userModel.js";

const addAll = async (req, res) => { 
    try {
        const users = await User.find();
        const updatedUsers = await Promise.all(
            users.map(async (user) => {
            const healthData = generateRandomHealthData();
            user.health_data.push(healthData);
            if (user.health_data.length > 10) {
                user.health_data = user.health_data.slice(-10);
            }

            return await user.save();
            })
        );
        res.status(200).json({ message: "All users updated successfully", updatedUsers });
    } catch (error) {
        res.status(500).json({ message: "Error updating users", error });
    }
}
export default addAll;



