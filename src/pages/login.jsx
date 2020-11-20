import Layout from '../common/components/Layout';
import { Container, TextField, Button } from '@material-ui/core';

const login = () => {
  return (
    <Layout title="JAM | login">
      <Container>
        <form>
          <TextField type="email" variant="outlined" label="Email"></TextField>
        </form>
      </Container>
    </Layout>
  );
};

export default login;
