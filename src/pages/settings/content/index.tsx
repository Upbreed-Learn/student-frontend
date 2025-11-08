import { useQueryState } from 'nuqs';
import Profile from './profile';
import Subscription from './subscription';
import Privacy from './privacy';
import Password from './password';

const Content = () => {
  const [tab, _] = useQueryState('section', {
    defaultValue: 'profile',
  });

  return (
    <section className="flex justify-center pt-22.25 pb-39.25">
      <div className="flex w-full max-w-7xl px-18">
        <div className="w-full max-w-[60.85rem] px-45.25">
          {tab === 'profile' && <Profile />}
          {tab === 'subscription' && <Subscription />}
          {tab === 'privacy' && <Privacy />}
          {tab === 'password' && <Password />}
        </div>
      </div>
    </section>
  );
};

export default Content;
