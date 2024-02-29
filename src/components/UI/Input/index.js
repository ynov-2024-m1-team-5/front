import styles from "./index.module.scss";

const Index = ({
    label,
    type,
    name,
    value,
    defaultValue,
    isRequired,
    placeholder,
    onChange,
}) => {
    return (
        <div className={styles.wrapper}>
            {label && <label>{label}</label>}
            <input
                name={name}
                value={value}
                required={isRequired}
                placeholder={placeholder}
                type={type}
                onChange={onChange}
                defaultValue={defaultValue}
            />
        </div>
    );
};

export default Index;
