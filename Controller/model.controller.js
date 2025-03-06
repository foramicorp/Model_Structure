const create = async (req, res) => {
    try {
        const newProperty = new Property(req.body);
        await newProperty.save();
        res.status(201).json(newProperty);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getAll = async (req, res) => {
    try {
        const properties = await Property.find();
        res.json(properties);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    create,getAll
}