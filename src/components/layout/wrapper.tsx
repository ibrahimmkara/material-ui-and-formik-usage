import { FC, ReactNode } from "react";
import { CssBaseline, Grid, Paper } from "@material-ui/core";


const Wrapper: FC<{ children: ReactNode }> = (props) => {
    return (
        <>
            <CssBaseline />
            <Grid
                container
                spacing={0}
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}
            >
                <Paper>
                    {props.children}
                </Paper>
            </Grid>
        </>
    )
}

export default Wrapper;