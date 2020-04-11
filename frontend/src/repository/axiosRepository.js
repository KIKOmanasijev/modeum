import axios from './custom-axios'
// import qs from 'qs'

const articleService = {
    fetchArticles: ()=> {
        return axios.get("/api/articles");
    },

    fetchArticle: (id)=> {
        return axios.get(`/api/articles/${id}`);
    },

    login: (user) => {
        return axios.post(`/api/auth`, user);
    },

    incViews: (id) => {
        axios.post(`/api/incViews/${id}`);
    },

    getArticlesByAuthor: (id) => {
        const token = localStorage.getItem("token");
        
        if (token){
            const config = {
                headers: {
                    'Authorization':`Bearer ${token}`
                }
            }
            return axios.get(`/api/articlesByAuthor/${id}`, config);
        }
        return axios.get(`/api/articlesByAuthor/${id}`);
    },

    saveArticle: (id, article) => {
        return axios.post(`/api/save/${id}`, article);
    },

    deleteArticle: (id) => {
        return axios.delete(`/api/articles/${id}`);
    },

    createArticle: (article) => {
        return axios.post(`/api/articles`, article);
    },

    postComment: (comment) => {
        var config = {
            params: {
                postId: comment.postId,
                authorId: comment.authorId,
                content: comment.content
            }
        }
        return axios.post(`/api/comment`, comment, config);
    },

    getArticlesByCategory: (category) => {
        return axios.get(`/api/category/${category}`);
    }
}

export default articleService;
