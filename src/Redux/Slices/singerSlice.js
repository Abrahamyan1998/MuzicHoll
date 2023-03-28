import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    singers: [
        {
            id: uuidv4(),
            name: "Eminem",
            src: "https://www.peoples.ru/art/music/rep/eminem/6lCbZwLYUK6dQ.jpeg",
            description: "Marshall Bruce Mathers III (born October 17, 1972), known professionally as Eminem (/ˌɛmɪˈnɛm/; often stylized as EMINƎM), is an American rapper, songwriter, and record producer. He is credited with popularizing hip hop in middle America and is critically acclaimed as one of the greatest rappers of all time.[2] Eminem's global success and acclaimed works are widely regarded as having broken racial barriers for the acceptance of white rappers in popular music. While much of his transgressive work during the late 1990s and early 2000s made him widely controversial, he came to be a representation of popular angst of the American underclass and has been cited as an influence for many artists of various genres.",
            album: [
                {
                    title: "Mockingbird",
                    link: "https://www.youtube.com/watch?v=t5rBx86Noa0&list=RDt5rBx86Noa0&start_radio=1",
                },
                {
                    title: "Without-Me",
                    link: "https://www.youtube.com/watch?v=YVkUvmDQ3HY",
                }
            ]
        },
        {
            id: uuidv4(),
            name: "Dua Lipa",
            src: "https://1.bp.blogspot.com/-nK5OB1x60_U/YNuE5n-ctGI/AAAAAAAAkUA/D8Totuf8oGEq-clw_YXkje9zsiU4k8fDQCLcBGAsYHQ/s1350/dualipa000000000862.jpg",
            description: `Dua Lipa (/ˈduːə ˈliːpə/ (listen) DOO-ə LEE-pə, Albanian: [ˈdua ˈlipa]; born 22 August 1995) is an English and Albanian[3][1] singer and songwriter. Possessing a mezzo-soprano vocal range, Lipa has received numerous accolades, including six Brit Awards, three Grammy Awards, two MTV Europe Music Awards, an MTV Video Music Award, two Billboard Music Awards, an American Music Award, and two Guinness World Records. The songs "No Lie" and "New Rules" each have over 1 billion views on YouTube, the latter over 2.8 billion. Her two albums, Dua Lipa (2017) and Future Nostalgia (2020), are the most-streamed female albums on Spotify with over 10 billion streams each.`,
            album: [
                {
                    title: "One-Kiss",
                    link: "https://www.youtube.com/watch?v=YaOlxgJHif0",
                }
            ]
        },
        {
            id: uuidv4(),
            name: "Doja Cat",
            src: "https://pbs.twimg.com/media/En-HHVfXcAMjt9G?format=jpg&name=medium",
            description: `Amala Ratna Zandile Dlamini (born October 21, 1995), known professionally as Doja Cat (/ˈdoʊdʒə kæt/ DOH-jə KAT), is an American rapper, singer-songwriter, and record producer. Born and raised in Los Angeles, California, she began making and releasing music on SoundCloud. Her song "So High" caught the attention of Kemosabe and RCA Records, with which she signed a joint record deal. She released her debut EP Purrr! in 2014.`,
            album: [
                {
                    title: "Woman",
                    link: "https://www.youtube.com/watch?v=yxW5yuzVi8w",

                },
                {
                    title: "Wine Pon You",
                    link: "https://www.youtube.com/watch?v=nJDp-Cy64Mw",
                }
            ]
        }
    ]
}

export const singersSlice = createSlice({
    name: "singers",
    initialState,
})

export const selectSingersState = (state) => state.singers;
export default singersSlice.reducer;