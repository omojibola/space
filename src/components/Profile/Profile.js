import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

import {
  Text,
  ProfileRow,
  Column,
  ProfileWrapper,
  Image,
  Header1,
} from './ProfileElements';

const Profile = ({ profile, error, loading, fetchProfile }) => {
  const getProfileData = async () => {
    await fetchProfile();
  };
  // fetch profile data
  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <ProfileWrapper>
      <ProfileRow>
        <Column>
          <Image src={profile.profileImage} />
          <Header1>{profile.fullName}</Header1>
        </Column>
        <Column>
          <div>hey</div>
        </Column>
      </ProfileRow>
    </ProfileWrapper>
  );
};

const mapStateToProps = ({ profile }) => ({
  profile: profile.data,
  loading: profile.loading,
  error: profile.error,
});

const mapDispatchToProps = {
  fetchProfile: actions.fetchProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
