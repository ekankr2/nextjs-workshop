import React from 'react';
import Animation from "./Animation";
import Link from "next/link";

const Hero = () => {
    return (
        <>
            <div
                className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    안녕하세요 빡빡이 입니다!
                    <br className="hidden lg:inline-block"/>
                    오늘도 빡코딩?
                </h1>
                <p className="mb-8 leading-relaxed">봄바람을 천하를 그러므로 얼음과 생의 가슴에 곧 위하여서. 트고, 사라지지 대한 심장은 주며, 생의 위하여
                    있는 힘있다. 두기 피가 영원히 능히 착목한는 약동하다. 것은 과실이 생명을 같은 교향악이다. 열매를 우는 소금이라 일월과 미묘한 살 인도하겠다는 가진 그리하였는가?
                    갑 이상은 과실이 못하다 대한 대고, 것이다. 못할 이상이 붙잡아 그러므로 인간의 용기가 내는 목숨을 예수는 있으랴? 발휘하기 예가 품고 끓는 그들의 그림자는
                    원대하고, 돋고, 보이는 약동하다. 살 그들은 그들의 대고, 얼마나 노래하며 불어 목숨이 이상의 칼이다. 오직 시들어 발휘하기 그리하였는가? 위하여 무엇을 풍부하게
                    피어나기 쓸쓸하랴?</p>
                <div className="flex justify-center">
                    <Link href="/projects">
                        <a className="btn-project">
                            프로젝트 보러가기
                        </a>
                    </Link>

                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation/>
            </div>
        </>
    );
};

export default Hero;