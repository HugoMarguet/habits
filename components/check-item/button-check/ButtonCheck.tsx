import { StyleSheet } from 'react-native';

interface IButtonCheckProps {
    isChecked: boolean;
    handleClick: () => void;
}

const ButtonCheck = ({ isChecked, handleClick }: IButtonCheckProps) => {

    const label = isChecked ? 'Done' : 'To Do';

    return (
        <button
        style={{ backgroundColor: isChecked ? 'green' : 'red' }}
        disabled={isChecked}
        onClick={handleClick}
        > {label}
        </button>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ButtonCheck;