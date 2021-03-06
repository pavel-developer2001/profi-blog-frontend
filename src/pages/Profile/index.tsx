import { Avatar, Button } from "@mui/material";
import React, { useEffect } from "react";
import styles from "./Profile.module.scss";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SubscribesList from "./components/SubscribesList";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findById } from "../../store/modules/user/user.slice";
import {
  selectUserData,
  selectUserLoading,
} from "../../store/modules/user/user.selector";
import ArticleList from "../Home/components/ArticleList";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Profile = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const params: any = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findById(params.id));
  }, [params.id]);
  const userData = useSelector(selectUserData);
  const loading = useSelector(selectUserLoading);

  return loading ? (
    <p>loading</p>
  ) : (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.headLeft}>
          <Avatar
            sx={{ width: 100, height: 100 }}
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
          />
        </div>
        <div className={styles.headRigth}>
          <div className={styles.top}>
            <strong>{userData.name}</strong>
          </div>
          <div className={styles.bottom}>
            <div className={styles.countBlock}>
              <strong>469 955</strong>
              <span>??????????????????</span>
            </div>
            <div className={styles.countBlock}>
              <strong>125 551</strong>
              <span>????????????????????</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.subscribeBlock}>
        <div className={styles.subscribeLeft}>
          <Button variant="contained">?????????????????????? ???? ??????????</Button>
        </div>
        <div className={styles.subscribeRigth}></div>
      </div>
      <div className={styles.body}>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="????????????" {...a11yProps(0)} />
              <Tab label="????????????????????" {...a11yProps(1)} />
              <Tab label="????????????????" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            ????????????
            <ArticleList articles={userData.articles} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            ????????????????????
            <SubscribesList />
          </TabPanel>
          <TabPanel value={value} index={2}>
            ????????????????
            <SubscribesList />
          </TabPanel>
        </Box>
      </div>
    </div>
  );
};

export default Profile;
