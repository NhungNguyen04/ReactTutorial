
// HOW TO STYLE REACT COMPONENTS WITH CSS
// ----------------------------------------------------------------
// (not included external frameworks or preprocessors)

// 1. External
// 2. Modules
// 3. Inline

// import styles from './Button.module.css'
function Button() {

    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }

    return(
        <button style={styles}>Click me</button>
    );
}

export default Button;