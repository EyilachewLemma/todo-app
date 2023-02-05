import Button from "react-bootstrap/Button";
import Layout from "../components/Layou";
import { EllipsisOutlined } from "@ant-design/icons";
import { Progress, Space } from "antd";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {useNavigate} from 'react-router-dom'
import classes from "./Collections.module.css";
const Collections = () => {
   const collections = useSelector(state=>state.collection.collections)
   const navigate = useNavigate()
   console.log('collections from state',collections)
   const viewDetail = (id,colectionName) =>{
    navigate(`/${id}?collection=${colectionName}`)
   }
  return (
    <Layout>
      <div>
        <div className={`${classes.collctioncontaner} text-white px-5`}>
          <div className="d-flex pt-5">
            <div className="fw-bold fs-5"> Collections</div>
            <div className="ms-auto">
              <EllipsisOutlined />
            </div>
          </div>
          <div className="d-flex pt-4">
            <Button
              variant="outline-secondary"
              className={`${classes.favoritbtn} text-white`}
            >
              Favorite
            </Button>
            <Button
              variant="outline-secondary"
              className={`${classes.allcollectionbtn} text-white`}
            >
              All Collections
            </Button>
          </div>
         {
            collections?.length > 0 && (
                <div className="row mt-4">
                <div
                  onClick={()=>viewDetail(collections[0]?.id,collections[0]?.name)}
                  className={`border shadow-sm p-2  col-5 col-md-3 me-4  me-md-3 mt-3 ${classes.collectionItem}`}
                >
                  <div className="text-start py-2">
                    <span
                      className={`${classes.collectionicon} ${classes.collectioniconschooll} p-2`}
                    >
                      <i className="fa-solid fa-book-open"></i>
                    </span>
                  </div>
                  <p className="text-start fw-bold mt-3">School</p>
                  <div className="d-flex">
                    <p>2/4 done</p>
                    <div className="ms-auto">
                      <Space wrap>
                        <Progress
                          type="circle"
                          percent={50}
                          width={25}
                          showInfo={false}
                          strokeColor="#ED93B1"
                        />
                      </Space>
                    </div>
                  </div>
                </div>
                <div
                onClick={()=>viewDetail(collections[1]?.id,collections[1]?.name)}
                className={`border shadow-sm p-2  col-5 col-md-3  me-md-3 mt-3 ${classes.collectionItem}`}
              >
                <div className="text-start py-2">
                  <span
                    className={`${classes.collectionicon} ${classes.collectioniconpersonal} p-2`}
                  >
                  <i className="fa-solid fa-user"></i>
                  </span>
                </div>
                <p className="text-start fw-bold mt-3">Personal</p>
                <div className="d-flex">
                  <p>5/8 done</p>
                  <div className="ms-auto">
                    <Space wrap>
                      <Progress
                        type="circle"
                        percent={25}
                        width={25}
                        showInfo={false}
                        strokeColor="#00FFFF"
                      />
                    </Space>
                  </div>
                </div>
              </div>
              <div
              onClick={()=>viewDetail(collections[2]?.id,collections[2]?.name)}
              className={`border shadow-sm p-2  col-5 col-md-3 me-4 me-3 mt-3 ${classes.collectionItem}`}
            >
              <div className="text-start py-2">
                <span
                  className={`${classes.collectionicon} ${classes.collectionicondesign} p-2`}
                >
                <i className="fa-solid fa-paintbrush"></i>
                </span>
              </div>
              <p className="text-start fw-bold mt-3">Design</p>
              <div className="d-flex">
                <p>2/6 done</p>
                <div className="ms-auto">
                  <Space wrap>
                    <Progress
                      type="circle"
                      percent={70}
                      width={25}
                      showInfo={false}
                      strokeColor="#C49CE9"
                    />
                  </Space>
                </div>
              </div>
            </div>
            <div
            onClick={()=>viewDetail(collections[3]?.id,collections[3]?.name)}
            className={`border shadow-sm p-2  col-5 col-md-3  me-md-3 mt-3 ${classes.collectionItem}`}
          >
            <div className="text-start py-2">
              <span
                className={`${classes.collectionicon} ${classes.collectionicongrocery} p-2`}
              >
              <i className="fa-solid fa-cart-shopping"></i>
              </span>
            </div>
            <p className="text-start fw-bold mt-3">Groceries</p>
            <div className="d-flex">
              <p>5/8 done</p>
              <div className="ms-auto">
                <Space wrap>
                  <Progress
                    type="circle"
                    percent={30}
                    width={25}
                    showInfo={false}
                    strokeColor="#EED455"
                  />
                </Space>
              </div>
            </div>
          </div>
          <div className={`border shadow-sm p-2  col-5 col-md-3 mt-3 align-self-center ${classes.addcollectionItem}`}>
          <span><i className="fa-solid fa-plus"></i></span>
          </div>
              </div>
            )
         }
        </div>
      </div>
    </Layout>
  );
};

export default Collections;
