import Head from 'next/head';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useAuth } from 'src/hooks/use-auth';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { Layout as AuthLayout } from 'src/layouts/auth/layout';
import { Select, MenuItem, FormControl, InputLabel, FormHelperText } from '@mui/material';

const CreateEmployeePage = () => {
    const router = useRouter();
    const auth = useAuth();

    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            password: '',
            phoneNumber: '',
            email: '',
            department: '',
            submit: null
        },
        validationSchema: Yup.object({
            name: Yup.string().max(255).required('Name is required'),
            surname: Yup.string().max(255).required('Surname is required'),
            password: Yup.string().max(255).required('Password is required'),
            phoneNumber: Yup.string().max(20).required('Phone Number is required'),
            email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
            department: Yup.string().max(255).required('Department is required'),
        }),
        onSubmit: async (values, helpers) => {
            try {
                // Call the function to create a new employee with the provided values
                // You might want to implement the function in your useAuth hook or API
                // await auth.createEmployee(values);

                // Redirect to the employee list page or wherever you want to navigate after creation
                router.push('/employee-list');
            } catch (err) {
                helpers.setStatus({ success: false });
                helpers.setErrors({ submit: err.message });
                helpers.setSubmitting(false);
            }
        }
    });

    return (
        <>
            <Head>
                <title>Create Employee</title>
            </Head>
            <Box
                sx={{
                    flex: '1 1 auto',
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <Box
                    sx={{
                        maxWidth: 550,
                        px: 3,
                        py: '100px',
                        width: '100%'
                    }}
                >
                    <div>
                        <Stack
                            spacing={1}
                            sx={{ mb: 3 }}
                        >
                            <Typography variant="h4">Create Employee</Typography>
                        </Stack>
                        <form
                            noValidate
                            onSubmit={formik.handleSubmit}
                        >
                            <Stack spacing={3}>
                                <TextField
                                    error={!!(formik.touched.name && formik.errors.name)}
                                    fullWidth
                                    helperText={formik.touched.name && formik.errors.name}
                                    label="Name"
                                    name="name"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                />
                                <TextField
                                    error={!!(formik.touched.surname && formik.errors.surname)}
                                    fullWidth
                                    helperText={formik.touched.surname && formik.errors.surname}
                                    label="Surname"
                                    name="surname"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.surname}
                                />
                                <TextField
                                    error={!!(formik.touched.password && formik.errors.password)}
                                    fullWidth
                                    helperText={formik.touched.password && formik.errors.password}
                                    label="Password"
                                    name="password"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="password"
                                    value={formik.values.password}
                                />
                                <TextField
                                    error={!!(formik.touched.phoneNumber && formik.errors.phoneNumber)}
                                    fullWidth
                                    helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                                    label="Phone Number"
                                    name="phoneNumber"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.phoneNumber}
                                />
                                <TextField
                                    error={!!(formik.touched.email && formik.errors.email)}
                                    fullWidth
                                    helperText={formik.touched.email && formik.errors.email}
                                    label="Email Address"
                                    name="email"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="email"
                                    value={formik.values.email}
                                />
                                <FormControl fullWidth>
                                    <InputLabel id="department-label">Department</InputLabel>
                                    <Select
                                        labelId="department-label"
                                        id="department"
                                        name="department"
                                        value={formik.values.department}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={!!(formik.touched.department && formik.errors.department)}
                                        label="Department"
                                    >
                                        <MenuItem value="" disabled>
                                            Select a Department
                                        </MenuItem>
                                        {/*vyvorit dane itemy z public service moznosti*/}
                                        <MenuItem value="odpad">odpad</MenuItem>
                                        <MenuItem value="kanalizace">kanalizace</MenuItem>
                                        <MenuItem value="pepe">pepe</MenuItem>
                                        {/* Add more departments as needed */}
                                    </Select>
                                    {formik.touched.department && formik.errors.department && (
                                        <FormHelperText error>{formik.errors.department}</FormHelperText>
                                    )}
                                </FormControl>
                            </Stack>
                            {formik.errors.submit && (
                                <Typography
                                    color="error"
                                    sx={{ mt: 3 }}
                                    variant="body2"
                                >
                                    {formik.errors.submit}
                                </Typography>
                            )}
                            <Button
                                fullWidth
                                size="large"
                                sx={{ mt: 3 }}
                                type="submit"
                                variant="contained"
                            >
                                Create Employee
                            </Button>
                        </form>
                    </div>
                </Box>
            </Box>
        </>
    );
};

CreateEmployeePage.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default CreateEmployeePage;
