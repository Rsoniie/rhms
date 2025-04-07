import jwt from 'jsonwebtoken';

const tokenVerification = async (req, res, next) => {
    const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Access Denied: No Token Provided!' });
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        console.error(err); 
        return res.status(400).json({ message: 'Invalid Token!' });
    }
};

export default tokenVerification;
