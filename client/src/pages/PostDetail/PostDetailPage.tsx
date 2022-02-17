import React from 'react';
import {Grid, Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import PostHeader from "../../components/PostHeader";
import PostIcons from "../../components/PostIcons";
import {styled} from "@mui/system";
import PostRating from "../../components/PostRating";
import Comment from './components/Comment'
import PostDetailAuthor from "./components/PostDetailAuthor";
import {useSetContentWidth} from "../../utils/hooks";


const PostTagTypography = styled(Typography)(() => ({
    color: '#3766a9',
    borderBottom: '1px solid #bed0ea',
    '&:hover': {
        color: '#cd192e',
        borderBottom: '1px solid #f6b4bc'
    },
    cursor: 'pointer',
    display: 'inline-block',
    marginRight: 8
}))
const PostDetailPage = (props: any) => {
    useSetContentWidth(640)
    const {post_id} = useParams<{ post_id: string }>()
    console.log('post_id', post_id)
    return (
        <>
            <Grid bgcolor={'#fff'} borderRadius={4}>
                <Grid p={4}>
                    <PostHeader position={'inherit'}/>
                    <Grid color={'#595959'} display={'flex'}>
                        <Typography mr={0.5}>
                            1792
                        </Typography>
                        <Typography>
                            просмотров
                        </Typography>
                    </Grid>
                </Grid>
                <Grid display={'flex'} justifyContent={'center'}>
                    <img
                        src="https://leonardo.osnova.io/7e5e2764-9d16-590c-b841-cb9b59007b5c/-/preview/850/-/format/webp/"
                        alt="" style={{width: '100%'}}/>
                </Grid>
                <Grid p={4}>
                    <Typography fontSize={17}>
                        Английский футбольный клуб «Вест Хэм Юнайтед» отстранил от игр защитника Курта Зуму и оштрафовал
                        его на «максимально возможную сумму» в 250 тысяч фунтов стерлингов (25 миллионов рублей) после
                        публикации видео, где спортсмен пинает своего бенгальского кота. Об этом сообщается на сайте
                        клуба, сумму уточняет The Telegraph.

                        Ролик выложил британский таблоид The Sun, первоначально кадры опубликовал брат футболиста Йоан
                        Зума в снэпчате. В первом видео спортсмен бросает кота на пол и пинает его, затем кидает в него
                        предметом, пока животное пытается спрятаться под стол. В третьем ролике кота держит ребёнок, а
                        Зума бьёт его по морде.

                        Пользователи соцсетей негативно отреагировали на проявленную жестокость в отношении животных и
                        создали петицию с призывом привлечь Зуму к ответственности. На момент написания материала её
                        подписали больше 266 тысяч человек.

                        К призывам привлечь Зуму к ответственности присоединился и мэр Лондона Садик Хан. В апреле 2021
                        году правительство Великобритании ужесточило наказание за насилие над животными: по новым
                        правилам футболисту грозит до пяти лет тюрьмы.
                        Эта жестокость недопустима. Если обвинение верно, то мы должны призвать «Вест Хэм Юнайтед»
                        отстранить игрока, а RSPCA провести расследование с целью судебного преследования. Эти люди
                        претендует на звание образца для подражания, они имеют влияние, а с этим приходит и
                        ответственность.

                        Кота и любых других животных, которые у него есть, следует отобрать. Ему явно противопоказано
                        содержать животных в своём доме. Он утверждает, что кот — любимый член его семьи, возможно,
                        социальные службы должны присмотреться к его детям.
                        После резонанса Британское Королевское общество защиты животных от жестокого обращения (RSPCA)
                        заявило, что уже разбирается в ситуации в судебном порядке, а полиция английского графства
                        Эссекс начала расследование совместно с зоозащитниками. Обеих кошек Зумы конфисковали.
                        Организация заверила, что животные в безопасности, но подробностей дела не раскрыла, чтобы
                        «соответствовать надлежащему судебному процессу».

                        В «Вест Хэм Юнайтед» сообщили, что полностью поддерживают расследование RSPCA, а сам Зума
                        сотрудничает со следствием. Согласно заявлению на сайте, футболист «чрезвычайно раскаивается и,
                        как и все в клубе, полностью понимает глубину чувства, вызванного инцидентом, и необходимость
                        принятия мер». Он заверил, что кошки здоровы, а «это был единственный случай». Его брат также
                        извинился за публикацию ролика.

                        После случившегося спонсоры начали отказываться от сотрудничества с Зумой и «Вест Хэм Юнайтед».
                        Согласно заявлению Adidas, они провели расследование, по результатам которого разорвали контракт
                        с футболистом.

                        От спонсорской сделки с клубом отказалась страховая компания Vitality, заявив, что «осуждает
                        любое насилие над животными». Ещё один спонсор «Вест Хэм Юнайтед» Experience Kissimmee заявил,
                        что обдумывает свою роль в отношениях с клубом и ждёт дополнительных данных о случившемся.
                    </Typography>
                    <Grid mt={2}>
                        <PostTagTypography>
                            #истории
                        </PostTagTypography>
                        <PostTagTypography>
                            #истории
                        </PostTagTypography>
                    </Grid>
                    <Grid mt={2} display={'flex'} justifyContent={'space-between'}>
                        <PostIcons isShowRepost/>
                        <PostRating/>
                    </Grid>
                    <PostDetailAuthor />
                </Grid>
            </Grid>
            <Comment/>
        </>
    );
};

export default React.memo(PostDetailPage);