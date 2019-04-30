import * as React from 'react'
import BaseLayout from '../components/BaseLayout';
import { Grid, Header, Form, Segment, Button, Icon }  from 'semantic-ui-react';

const IndexPage = () => {
  return (
    <BaseLayout title="Sign In" bgcolor="#eaeaea">
       <style>{`
      body > div,
      body > div > div {
        height: 100%;
      }
      `}</style>
      <Grid textAlign="center" verticalAlign="middle" style={{ height: '100%' }}>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header>
            Sentry
          </Header>
          <Form size="large" action="login" method="post">
            <Segment stacked>
              <Form.Input name="email" icon="user" iconPosition="left" placeholder="Email" />
              <Form.Input name="password" icon="lock" iconPosition="left" placeholder="Password" type="password" />
              <Button type="submit" icon color="blue" size="large" labelPosition="right" fluid>
                Sign In
                <Icon name="right arrow" />
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </BaseLayout>
  )
}

export default IndexPage;
