import productServices from "../services/products.js";

const getProducts = async (req, res, next) => {
    try {
        const products = await productServices.getAll();
        return res.json(products);
    } catch (err) {
        next(err);
    }
};

const getProduct = async (req, res, next) => {
    try {
        console.log(req);
        const existingProduct = await productServices.getProduct(req.params.id);

        if (!existingProduct) {
            res.status(404).send("No product found");
            return;
        }

        res.json(existingProduct);
    } catch (err) {
        next(err);
    }
};

const addProduct = async (req, res, next) => {
    try {
        const newProduct = await productServices.addProduct(req.body);
        res.json(newProduct);
    } catch (err) {
        next(err);
    }
};

const updateProduct = async (req, res, next) => {
    try {
        const id = req.params.id
        const product = await productServices.getProduct(id);

        if (!product) {
            res.status(404).send("No product found");
            return;
        }

        await productServices.updateProduct(id, req.body);
        res.send("Product updated");
    } catch (err) {
        next(err);
    }
};

const deleteProduct = async (req, res, next) => {
    try {
        await productServices.deleteProduct(req.params.id);
        res.send("Product deleted");
    } catch (err) {
        next(err);
    }
};


export default { getProduct, getProducts, deleteProduct, addProduct, updateProduct};
