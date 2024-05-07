import { Helmet } from "react-helmet-async";
import orderFood from "../../assets/shop/banner2.jpg"
import MenuCover from "../../Pages/Menu/MenuCover/MenuCover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../Hooks/useMenu";
import FoodCard from "../../Components/FoodCard/FoodCard";

const Order = () => {
    const [menu] = useMenu();
    const [tabIndex, setTabIndex] = useState(0)

    const offered = menu.filter(item => item.category === 'offered')
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss Restaurant | Order Food </title>
            </Helmet>
            <MenuCover
                img={orderFood}
                title={"Oder Food"}
            ></MenuCover>

            <Tabs className={"mt-10  lg:mx-40 lg:text-xl"} defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Slad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <div className="grid grid-cols-1 lg:grid-cols-3 mt-20 gap-8">
                        {
                            salad.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>

        </div >
    );
};

export default Order;