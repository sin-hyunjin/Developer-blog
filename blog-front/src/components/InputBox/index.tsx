import { ChangeEvent, forwardRef, KeyboardEvent } from "react";
import "./style.css";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
//                interface : Input Box Properties
interface Props {
  label: string;
  type: "text" | "password";
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  error: boolean;

  // ?필수가 아님
  message?: string;
  icon?: string;

  onButtonClick?: () => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
}

//                component : Input Box 컴포넌트
const InputBox = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
  //              state : properties
  const { label, type, placeholder, value, error, icon, message } = props;
  const { setValue, onButtonClick, onKeyDown } = props;

  //              event handler : Input 값 변경 이벤트 처리 함수
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event?.target.value;
    setValue(value);
  };
  //              event handler : Input 키보드처리 이벤트 처리 함수
  const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!onKeyDown) return;
    onKeyDown(event);
  };
  //              render : Input 컴포넌트
  return (
    <div className="inputbox">
      <div className="inputbox-label">{label}</div>
      <div
        // error일 경우 상태 변경
        className={error ? "inputbox-container-error" : "inputbox-container"}
      >
        <input
          ref={ref}
          className="input"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChangeHandler}
          onKeyDown={onKeyDownHandler}
        />

        {/* onButtonClick 함수가 undeefined가 아니면 렌더링 */}
        {onButtonClick !== undefined && (
          <div className="icon-button">
            {icon !== undefined && <div className={`icon ${icon}`}> </div>}
          </div>
        )}
      </div>
      {message !== undefined && (
        <div className="inputbox-message">{message}</div>
      )}
    </div>
  );
});

export default InputBox;
