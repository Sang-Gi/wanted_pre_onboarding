import React, { useState } from "react";
import './css/Tag.scss'

const Tag = (props) => {
    // 기본적으로 해시태그와 같은구조

    // 태그 컨텐츠
    const [hashtag, setHashtag] = useState('');

    // 태그 리스트
    const [hashtagArr, setHashtagArr] = useState([]);

    // 태그 등록
    const uploadTag = () => {
        let uploadedTagArr = [...hashtagArr];   // 기존 state ++
        uploadedTagArr.push(hashtag);   // 태그 리스트에 새 태그 등록
        setHashtagArr(uploadedTagArr);    // state 업데이트
        setHashtag(''); // 등로 후, 기존 hashtag 삭제
    }

    // input value 입력 후, 엔터누르면 등록 upload (단, 길이가 0일때는 태그추가 X.)
    const enterPress = e => { 
        if (e.target.value.length !== 0 && e.key === 'Enter') {
            uploadTag();
        }
    }

    // 태그 삭제
    const deleteTag = e => {
        const deleteTag = e.target.parentElement.innerText;
        // 직접 target에 접근하여 filter 거친후 새로 배열 만들어 삭제 구현
        // 버튼의 'X'때문에 obj 접근이 불가해, 한글자만 삭제 가능 -> solved.
        const detletedArr = hashtagArr.filter(hashtag => hashtag !== deleteTag);
        setHashtagArr(detletedArr);
        console.log(deleteTag)
    }



    return (
        <div className='tag'>
            <h2>Tag</h2>
            <div className='tagBox'>
                {hashtagArr.map((hashtag, index) => {
                    return (
                        <div 
                            className='hashtag'
                            key={index}>
                            {hashtag}
                            <button className='deleteBtn' onClick={deleteTag}></button>
                        </div>
                    )
                })}
                <input
                    className='hastagInput'
                    type='text'
                    value={hashtag}
                    placeholder='Press enter to add tags'
                    onKeyPress={enterPress}
                    onChange={e => setHashtag(e.target.value)}
                />
            </div>
        </div>
    );
};

export default Tag;
