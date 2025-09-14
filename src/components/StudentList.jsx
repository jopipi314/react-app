// src/components/StudentList.jsx
import { useState } from "react";

export default function StudentList() {
  const [students, setStudents] = useState([
    { id: 1, name: "김민수", major: "AI" },
    { id: 2, name: "이영희", major: "AI" },
  ]);

  const [name, setName] = useState("");
  const [major, setMajor] = useState("AI");

  // 이 함수를 return 문 위에 정의합니다.
  const handleAddStudent = (e) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;
    if (students.some((s) => s.name === trimmed)) {
      alert("중복 이름입니다");
      return;
    }
    const newItem = { id: Date.now(), name: trimmed, major: major };
    setStudents((prev) => [newItem, ...prev]);
    setName("");
    setMajor("AI"); // 추가 후 전공 선택 초기화
  };

  return (
    <section className="card">
      <h3>학생 명단</h3>
      <ul>
        {students.map((s) => (
          <li key={s.id}>
            {s.name} ({s.major})
            {/* 버튼의 onClick에 삭제 로직을 바로 넣습니다. */}
            <button onClick={() => setStudents((prev) => prev.filter((x) => x.id !== s.id))}>
              삭제
            </button>
          </li>
        ))}
      </ul>
      {/* 폼 영역 */}
      {/* 아래 폼 코드가 바로 이 위치에 들어가야 합니다. */}
      <form onSubmit={handleAddStudent}> {/* 위에서 정의한 함수를 연결합니다. */}
        <input
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select value={major} onChange={(e) => setMajor(e.target.value)}>
          <option value="AI">AI</option>
          <option value="DS">DS</option>
          <option value="SW">SW</option>
        </select>
        <button type="submit">추가</button>
      </form>
    </section>
  );
}