import * as yup from 'yup';


export const CategorySchema=yup.object({
    body:yup.object({
        Category_name:yup.string().required('category name is required')
    }),
    file:yup.object({
        filename:yup.string().required('file name is required'),
        path:yup.string().required('path is required'),

    })
});


export const CategoryUpdatachema=yup.object({
    body:yup.object({
        Category_name:yup.string().required('category name is required')
    }),
})