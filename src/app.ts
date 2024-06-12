import express from 'express'
import UserRoutes from './routes/UserRoutes'
import paymentRoutes from './routes/PaymentRouter'
import RatingRoutes from './routes/RatingRoutes'
import Bookroutes from './routes/BookRoutes'
import AuthorsRoute from './routes/AuthorRoutes'
import ReviewRoutes from './routes/ReviewRoutes'

const app = express();   
const port = 3000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// routes
app.use('/Book/books',Bookroutes)
app.use('/Book-Store/User',UserRoutes)
app.use('/Book-Store/Books',RatingRoutes)
app.use('/Book-Store/Authors',AuthorsRoute)
app.use('/Book-Store/books',ReviewRoutes)
app.use('/Book-Store/order',paymentRoutes)


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})

