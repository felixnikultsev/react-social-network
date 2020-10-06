import React from 'react'
import styles from './FormControl.module.css'

const FormControl = ({input, meta, elem, ...props}) => {
    return (
        <div className={`${styles.control} ${meta.touched && meta.error && styles.error}`}>
            {React.createElement(elem, {...input, ...props})}
            {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
    )
}
export default FormControl