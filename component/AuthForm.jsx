import styled from 'styled-components';
import { Button, Input, Form } from 'antd';
import useInput from '../src/lib/hook/useInput';
import { useDispatch } from 'react-redux';
import { UserService } from '../src/service/userService';

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const AuthForm = () => {
  const dispatch = useDispatch();
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const onSubmitForm = () => {
    console.log('onsubmit');
    dispatch(UserService.login({ email: email, password: password }));
  };
  return (
    <FormWrapper onFinish={onSubmitForm}>
      <h3>로그인</h3>
      <Input
        name="user-email"
        type="email"
        placeholder="email"
        value={email}
        onChange={onChangeEmail}
        required
      />
      <Input
        name="password"
        type="password"
        placeholder="password"
        value={password}
        onChange={onChangePassword}
        required
      />
      <Button type="primary" htmlType="submit">
        로그인
      </Button>
    </FormWrapper>
  );
};
export default AuthForm;
