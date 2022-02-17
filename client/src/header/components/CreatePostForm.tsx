import React, {useState} from 'react';
import {Autocomplete, Chip, Grid, TextareaAutosize, TextField} from "@mui/material";
import {useFormik} from "formik";
import {styled} from "@mui/system";
import Button from "../../components/Button";


const FormStyled = styled('form')(() => ({
    display: 'flex',
    flexDirection: 'column',
    width: '80%'
}))
const TextAreaStyled = styled(TextareaAutosize)(() => ({
    resize: 'none',
    outline: 'none',
    border: '0.5px solid #c4c4c4',
    borderRadius: 4,
    marginTop: 8,
    fontFamily: 'inherit',
    fontSize: 16,
    padding: 15,
    '&:focus': {
        border: "2px solid #1976d2",
    }
}))
const UploadFileGrid = styled(Grid)(() => ({
    height: 200,
    marginTop: 8,
    border: '0.5px dashed #000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer'
}))
const LabelFileUpload = styled('label')(() => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}))
const TitleInputStyled = styled(TextField)(() => ({
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "#c4c4c4"
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "#c4c4c4"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#1976d2"
    }
}))
const TagInputStyled = styled(Autocomplete)(() => ({
    '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child': {
        // Default left padding is 6px
        paddingLeft: 26
    },
    "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#c4c4c4"
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "#c4c4c4"
    },
    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#1976d2"
    }
}))

const CreatePostForm = (props: any) => {
    //mb use no Formik, a react-hook-form
    const formik = useFormik({
        initialValues: {
            title: '',
            body: '',
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    })
    const [tags, setTags] = useState<Array<string>>([])
    const [img, setImg] = useState<null | any>(null)
    console.log('img --- ' + img)
    console.log('RERENDER!!!!!')
    return (
        <Grid display={'flex'} justifyContent={'center'} mt={2}>
            <FormStyled onSubmit={formik.handleSubmit}>
                <TitleInputStyled
                    label={'title'}
                    name={'title'}
                    value={formik.values.title}
                    onChange={formik.handleChange}
                />
                <TextAreaStyled
                    placeholder={'body'}
                    minRows={6}
                    value={formik.values.body}
                    name={'body'}
                    onChange={formik.handleChange}
                    style={{height: 150}}
                />
                <TagInputStyled
                    style={{marginTop: 8}}
                    value={tags}
                    disableClearable
                    multiple
                    options={[]}
                    freeSolo
                    //@ts-ignore
                    renderTags={(value: string[], getTagProps) =>
                        tags.map((tag: string, i: number) => (
                            <Chip
                                variant="outlined"
                                label={tag}
                                {...getTagProps({index: i})}
                                onDelete={() => {
                                    setTags(tags.filter(item => item !== tag))
                                }}
                            />
                        ))
                    }
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="outlined"
                            label="tags"
                            placeholder="enter tags"
                        />
                    )}
                    onChange={(e) => {
                        setTags([...tags, (e.target as HTMLInputElement).value])
                    }}
                />
                <UploadFileGrid>
                    <LabelFileUpload htmlFor="uploadBtn">Choose File</LabelFileUpload>
                    <input id="uploadBtn" type="file" hidden onChange={(e) => {
                        setImg(e.target.files)
                    }}/>
                </UploadFileGrid>

                <Grid mt={9}>
                    <Button bgcolor={'#4683d9'} colorFont={'#fff'} bgcolorDarken={'#2a5fa4'} width={140}>
                        Опубликовать
                    </Button>
                </Grid>
            </FormStyled>
        </Grid>
    );
};

export default React.memo(CreatePostForm);