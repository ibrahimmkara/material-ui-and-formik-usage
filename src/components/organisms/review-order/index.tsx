import { useFormikContext } from "formik"
import { Typography, Grid } from "@material-ui/core"

import ProductDetails from "./product-details"
import ShippingDetails from "./shipping-details"
import PaymentDetails from "./payment-details"

const ReviewOrder = () => {
    const { values } = useFormikContext()

    return (
        <>
            <Typography variant="h6" gutterBottom>
                Order summary
            </Typography>
            <ProductDetails />
            <Grid container spacing={2}>
                <ShippingDetails formValues={values} />
                <PaymentDetails formValues={values} />
            </Grid>
        </>
    )
}

export default ReviewOrder