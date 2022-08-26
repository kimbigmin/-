import styled from 'styled-components';

type InfoListProps = {
    src: string;
    name: string;
    type?: 'request';
};

const InfoList = ({ src, name, type }: InfoListProps) => {
    return (
        <StudentInfo>
            {/* Image 컴포넌트로 대체해야 됨*/}
            <div className="info-box">
                <img src={src} alt="student"></img>
                <ul>
                    <li className="name">{name}</li>
                    <li className="class">능곡중학교 3학년 6반</li>
                </ul>
            </div>

            {type === 'request' ? (
                <div className="button-box">
                    <button className="accept">수락</button>
                    <button className="reject">거절</button>
                </div>
            ) : null}
        </StudentInfo>
    );
};

const StudentInfo = styled.li`
    display: flex;
    flex-direction: row;
    border: 0.2px solid #9f9f9f;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-radius: 5px;
    margin-bottom: 0.5rem;

    .info-box {
        display: flex;
    }

    img {
        width: 50px;
        border-radius: 50%;
    }

    ul {
        margin-left: 1rem;
        .name {
            font-size: 1rem;
            font-weight: 600;
            margin-bottom: 3px;
        }

        .class {
            font-size: 0.8rem;
            color: #7b7b7b;
        }
    }

    .button-box {
        display: flex;
        flex-direction: column;
        width: 5rem;

        button {
            border: 0;
            margin: 5px;
            padding: 8px;
            border-radius: 5px;
        }

        .accept {
            background-color: #66bb6a;
            color: white;
        }

        .reject {
            background-color: #ff4b4b;
            color: white;
        }
    }
`;

export default InfoList;
