import React from 'react';
import ImgMediaCard from "../index";
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import mdx from './ImgMediaCard.mdx';

export default {
    title: 'components|basic/ImgMediaCard', // 스토리북에서 보여질 그룹과 경로를 명시
    component: ImgMediaCard, // 어떤 컴포넌트를 문서화 할지 명시
    decorators: [withKnobs], // 애드온 적용
    parameters: {
        componentSubtitle: '"카드"라고 보여주는 컴포넌트',
        docs: {
            page: mdx
        }
    }
};

export const storybook = () => {
    // knobs 만들기
    const id = text('id', '1');
    const content = text('content', "Content");
    const images = text('images', "https://s3-ap-northeast-1.amazonaws.com/dcreviewsresized/300_300_20190522_173332.jpg");
    const title = text('title', "Title");
    return (
        <ImgMediaCard
            id={id}
            Content={content}
            Images={images}
            Title={title}
            onCardClick={action('onCardClick')}
        />
    );
};
storybook.story = {
    name: 'Default'
};

export const standard = () => (
    <ImgMediaCard
        Title="Storybook"
        Content="내용"
        Images="https://s3-ap-northeast-1.amazonaws.com/dcreviewsresized/300_300_20190522_173332.jpg" />
);