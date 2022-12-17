import axios from "axios";
import {API_URL} from "./constant";
import {useQuery} from "@tanstack/react-query";
import {HelloWorld} from "../../models/HelloWorld";

//GET request example
const useGetHelloWorld = () => {
	return useQuery(
		["helloWorld"],
		() => {
			return axios.get<HelloWorld>(`${API_URL}/hello-world`);
		},
		{
			select: data => data.data,
			retry: 1,
		}
	);
};

export default useGetHelloWorld;
