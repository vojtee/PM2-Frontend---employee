import Head from 'next/head';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useAuth } from 'src/hooks/use-auth';
import { Layout as AuthLayout } from 'src/layouts/auth/layout';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { Select, MenuItem, FormControl, InputLabel, FormHelperText } from '@mui/material';


const CreateDepartmentPage = () => {
    const router = useRouter();
    const auth = useAuth();

    const formik = useFormik({
        initialValues: {
            departmentName: '',
            description: '',
            phoneNumber: '',
            address: '',
            departmentCategory: '',
            submit: null
        },
        validationSchema: Yup.object({
            departmentName: Yup.string().max(255).required('Department Name is required'),
            phoneNumber: Yup.string().max(20).required('Phone Number is required'),
            address: Yup.string().max(500).required('Address is required'),
            description: Yup.string().max(1000),
            departmentCategory: Yup.string().max(255).required('Department Category is required'), // Validation for department category
        }),
        onSubmit: async (values, helpers) => {
            try {
                // Call the function to create a new department with the provided values
                // You might want to implement the function in your useAuth hook or API
                // await auth.createDepartment(values);

                // Redirect to the department list page or wherever you want to navigate after creation
                router.push('/department-list');
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
                <title>Create Department</title>
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
                            <Typography variant="h4">Create Department</Typography>
                        </Stack>
                        <form
                            noValidate
                            onSubmit={formik.handleSubmit}
                        >
                            <Stack spacing={3}>
                                <TextField
                                    error={!!(formik.touched.departmentName && formik.errors.departmentName)}
                                    fullWidth
                                    helperText={formik.touched.departmentName && formik.errors.departmentName}
                                    label="Department Name"
                                    name="departmentName"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.departmentName}
                                />
                                <TextField
                                    error={!!(formik.touched.description && formik.errors.description)}
                                    fullWidth
                                    helperText={formik.touched.description && formik.errors.description}
                                    label="Description"
                                    name="description"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    multiline
                                    rows={4}
                                    value={formik.values.description}
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
                                    error={!!(formik.touched.address && formik.errors.address)}
                                    fullWidth
                                    helperText={formik.touched.address && formik.errors.address}
                                    label="Address"
                                    name="address"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.address}
                                />
                                <FormControl fullWidth>
                                    <InputLabel id="department-category-label">Department Category</InputLabel>
                                    <Select
                                        labelId="department-category-label"
                                        id="departmentCategory"
                                        name="departmentCategory"
                                        value={formik.values.departmentCategory}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={!!(formik.touched.departmentCategory && formik.errors.departmentCategory)}
                                        label="Department Category"
                                    >
                                        <MenuItem value="" disabled>
                                            Select a Department Category
                                        </MenuItem>
                                        <MenuItem value="Category1">Category 1</MenuItem>
                                        <MenuItem value="Category2">Category 2</MenuItem>
                                        <MenuItem value="Category3">Category 3</MenuItem>
                                        {/* Add more department categories as needed */}
                                    </Select>
                                    {formik.touched.departmentCategory && formik.errors.departmentCategory && (
                                        <FormHelperText error>{formik.errors.departmentCategory}</FormHelperText>
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
                                Create Department
                            </Button>
                        </form>
                    </div>
                </Box>
            </Box>
        </>
    );
};

CreateDepartmentPage.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default CreateDepartmentPage;