import mongoose from 'mongoose';

const MONGO_URI = 'mongodb+srv://profe:2OVlIoKuMxmI1FmO@cluster0.lapkq.mongodb.net/db-repaso';

const dbConexion = async () => {

    try{
        await mongoose.connect(MONGO_URI,{});
        console.log('Base de datos conectada exitosamente')
    }
    catch (error){
        console.error(error);
        console.error('Error al iniciar la base de datos :C')
    };
}

export default dbConexion;