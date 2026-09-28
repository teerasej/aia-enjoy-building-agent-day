# แบบฝึกหัดที่ 1 สร้าง Meeting Action Follow-up Agent

เราจะสร้าง Agent ที่เปลี่ยนบันทึกประชุมซึ่งมีข้อสรุป งาน และความเห็นปะปนกันให้เป็นข้อมูลที่ตรวจ และส่งต่อได้ง่าย จากนั้นเพิ่ม `Knowledge` และสร้าง Prompt Tool เพื่อจัดผลลัพธ์ให้อยู่ในรูปแบบเดียวกันครับ

<div class="workshop-artwork">

![ทีมจัดระเบียบบันทึกประชุมเพื่อเตรียม Meeting Action Follow-up Agent](../assets/workshop/meeting-action-follow-up.webp)

</div>


## Prerequisites

- เข้า Microsoft Copilot Studio และเลือก Environment ที่ผู้สอนกำหนด
- ดาวน์โหลด [Project Northstar Reference Pack](https://teerasej.github.io/aia-enjoy-building-agent-day/downloads/project-northstar-reference-pack.docx)
- เปิด [บันทึกประชุม Project Northstar](../resources/fictional-meeting-notes.md)
- ใช้เฉพาะข้อมูลสมมติในแบบฝึกหัด

---

## Scenario จัดระเบียบบันทึกประชุม Project Northstar

ทีม Project Northstar กำลังเตรียมทดลองใช้ internal request tracker บันทึกประชุมมีทั้งเรื่องที่ตกลงแล้ว งานที่ต้องทำ คำถาม และข้อเสนอที่ยังไม่ได้อนุมัติ

### Practice 1 สร้างและทดสอบ Agent

**Primary target:** สร้าง Agent ที่จัดบันทึกประชุมโดยไม่แต่ง owner, due date หรือ decision ที่ไม่มีในต้นฉบับ

1. เปิด Copilot Studio ตรวจสอบ Environment ให้ตรงกับที่ผู้สอนกำหนด แล้วไปที่เมนู `Agents` ทางด้านซ้าย
2. เลือก `Create blank agent` ทางด้านบนขวา
3. ตั้งชื่อ Agent ดังนี้ แล้วเลือก `Create`

   ```text
   Meeting Action Follow-up Agent [ชื่อเล่น]
   ```

4. รอจนระบบ provisioning Agent เสร็จและเปิดหน้า Agent ให้เรียบร้อย อย่าเปลี่ยนหน้าเว็บในระหว่างนี้
5. ไปที่ส่วน `Instructions` วางข้อความต่อไปนี้ แล้วเลือก `Save`

   ```text
    Task
    - Organize training meeting notes into the required sections:
       1. Decisions
       2. Action items
       3. Open questions
       4. Missing information

    Rules
    - Preserve names and dates exactly as provided.
    - Treat an item as a decision only when the notes explicitly confirm it.
    - Never invent an owner, due date, approval, or completion status.
    - Use configured Knowledge only for project context, not as evidence for
       meeting-specific details.

    Standardized brief
    - When the user requests a standardized brief, use Create Meeting Follow-up
       Brief with the reviewed meeting summary.
    - Always require human review.
   ```

6. เปิด `Test your agent`
7. วาง [บันทึกประชุม Project Northstar](../resources/fictional-meeting-notes.md) แล้วส่งคำขอนี้

   ```text
   จัดบันทึกประชุมนี้เป็น Decisions, Action items, Open questions และ
   Missing information
   ```

   ตรวจว่า `participant FAQ` ไม่มี owner และ `weekly leaderboard` ไม่ถูกเปลี่ยนเป็น decision

#### Pause and compare

- Agent จัดข้อมูลส่วนใดได้ดี
- ข้อมูลใดต้องรอให้คนยืนยัน

#### Checkpoint

- ผลลัพธ์มีสี่ส่วนและไม่เพิ่มข้อเท็จจริงที่ไม่มีในบันทึก

---

### Practice 2 เพิ่ม Project Knowledge

**Primary target:** เพิ่มไฟล์อ้างอิงหนึ่งไฟล์เพื่อให้ Agent ตอบบริบทโครงการโดยไม่ใช้ Knowledge เติมหลักฐานการประชุม

1. เปิด Agent แล้วไปที่ `Knowledge`
2. เลือก `Add knowledge` และอัปโหลด `project-northstar-reference-pack.docx`
3. ตั้งชื่อแหล่งข้อมูลดังนี้ แล้วเลือก `Add to agent` และ `Save`

   ```text
   Project Northstar Reference Pack
   ```

4. เริ่มบทสนทนาใหม่แล้วถาม

   ```text
   Project Northstar มีเป้าหมายอะไร ตอบจาก Knowledge และบอกชื่อแหล่งข้อมูลที่ใช้เมื่อทำได้
   ```

5. เริ่มบทสนทนาใหม่แล้วถามคำถามตรวจขอบเขต

   ```text
   จาก meeting notes ใครเป็น owner ของ participant FAQ
   ```

6. ตรวจว่า Agent อธิบายบริบทจาก Knowledge แต่ยังบอกว่า owner ต้องให้คนยืนยัน

> **Optional improvement:** หาก Agent ไม่ใช้ Knowledge เมื่อตอบคำถามในข้อ 4 ให้กลับไปที่ `Instructions` แล้วแทนที่ข้อความเดิมด้วย Instructions ฉบับสมบูรณ์ด้านล่าง จากนั้นเลือก `Save` และเริ่มบทสนทนาใหม่เพื่อทดสอบข้อ 4 และ 5 อีกครั้ง

```text
Task
- Organize training meeting notes into the required sections:
   1. Decisions
   2. Action items
   3. Open questions
   4. Missing information

Rules
- Preserve names and dates exactly as provided.
- Treat an item as a decision only when the notes explicitly confirm it.
- Never invent an owner, due date, approval, or completion status.
- Use configured Knowledge only for project context, not as evidence for
   meeting-specific details.

Knowledge use
- When the user asks about project context, search configured Knowledge before
   answering and base the answer on the retrieved content.
- Mention the Knowledge source name when it is available.
- If configured Knowledge does not contain the answer, say that the information
   was not found instead of guessing.
- Never use general project roles from Knowledge to fill missing owners, due
   dates, decisions, or other meeting-specific details.

Standardized brief
- When the user requests a standardized brief, use Create Meeting Follow-up
   Brief with the reviewed meeting summary.
- Always require human review.
```

การปรับปรุงนี้เพิ่มกติกาให้ Agent ค้นและอ้างอิง Knowledge เมื่อตอบบริบทโครงการ พร้อมบอกเมื่อไม่พบข้อมูล โดยยังคงกติกาเดิมที่ห้ามใช้ Knowledge เดา owner หรือรายละเอียดเฉพาะการประชุม

#### Pause and compare

Knowledge เปรียบเหมือนแฟ้มอ้างอิงของเพื่อนร่วมงาน แฟ้มช่วยอธิบายบริบท แต่ไม่ใช่หลักฐานว่าใครได้รับมอบหมายงานในการประชุมครั้งนี้ครับ

#### Checkpoint

- Agent ใช้ Knowledge อธิบายโครงการและไม่เติม owner ที่หายไป

> **⚠️ Environment blocked:** หากไฟล์ไม่พร้อมใช้งาน ให้บันทึกข้อความที่พบและดูตัวอย่างจากการสาธิตของ instructor  ห้ามใช้ไฟล์จริงหรือพยายามหลีกเลี่ยงนโยบาย Environment

---

### Practice 3 สร้าง Meeting Prompt Tool

**Primary target:** สร้าง Prompt Tool ที่เปลี่ยน meeting summary ที่ตรวจแล้วเป็น follow-up brief รูปแบบมาตรฐาน

1. จากหน้า Overview ของ Agent
2. ลงมาที่ `Tools` แล้วเลือก `Add a tool` > `Add new Prompt`
3. ตั้งชื่อ Prompt และเพิ่ม Text input ในช่อง instruction ตามค่าต่อไปนี้

   - **Prompt name**

     ```text
     Create Meeting Follow-up Brief
     ```

   - **คลิกในช่อง instruction แล้วเลือก Add Content > Text input จากด้านล่าง**

     ```text
     MeetingSummary
     ```

4. วาง Prompt ต่อไปนี้ และแทรก `MeetingSummary` input ในบรรทัดสุดท้าย

   ```text
   Transform the reviewed synthetic meeting summary into a follow-up brief.
   Use only information supplied in MeetingSummary.

   Return these sections in this order:
   1. Executive summary
   2. Confirmed decisions
   3. Action tracker
   4. Missing information
   5. Open questions
   6. Human review required

   Keep Executive summary to no more than three bullets.
   Format Action tracker as Task | Owner | Due date | Review status.
   Preserve supplied names and dates exactly.
   Mark missing or conflicting information for review.
   Never turn a suggestion into a decision or invent information.
   Never claim that anything was saved, sent, approved, or completed.
   End by asking a person to review and correct the brief before use.

   MeetingSummary:
   [insert MeetingSummary input here]
   ```

5. ใส่ sample value แล้วเลือก `Test`

   ```text
   Decision: Use the shared request form for the pilot.
   Action: Prepare the participant FAQ by 13 October 2026. Owner is missing.
   Suggestion: A weekly leaderboard was discussed but not approved.
   Open question: Who approves category changes after the pilot?
   ```

6. ตรวจว่า output มีครบหกส่วน owner ยังต้อง Review และ leaderboard ไม่อยู่ใน `Confirmed decisions` จากนั้นเลือก `Save`
7. กลับไปที่หน้า `Overview` ของ Agent ตรวจว่า `Create Meeting Follow-up Brief` แสดงอยู่ใน `Tools`
8. ที่ส่วน `Instructions` เลือก `Edit` แล้วแทนที่ข้อความเดิมด้วย Instructions ฉบับสมบูรณ์ด้านล่าง

   ```text
   Task
   - Organize training meeting notes into these sections:
      1. Decisions
      2. Action items
      3. Open questions
      4. Missing information

   Meeting rules
   - Preserve names and dates exactly as provided.
   - Treat an item as a decision only when the notes explicitly confirm it.
   - Never invent an owner, due date, approval, or completion status.
   - Use configured Knowledge only for project context, not as evidence for
      meeting-specific details.

   Knowledge use
   - When the user asks about project context, search configured Knowledge before
      answering and base the answer on the retrieved content.
   - Mention the Knowledge source name when it is available.
   - If configured Knowledge does not contain the answer, say that the information
      was not found instead of guessing.
   - Never use general project roles from Knowledge to fill missing owners, due
      dates, decisions, or other meeting-specific details.

   Follow-up brief workflow
   - First organize the meeting notes and let the user review the meeting summary.
   - When the user asks for a follow-up brief from the reviewed meeting summary,
      use [Create Meeting Follow-up Brief Tool].
   - Provide the reviewed meeting summary as the MeetingSummary input.
   - Never claim that anything was saved, sent, approved, or completed.
   - Always ask a person to review and correct the brief before use.
   ```

9. ในบรรทัด `use [Create Meeting Follow-up Brief Tool]` ให้ลบข้อความในวงเล็บเหลี่ยม วางเคอร์เซอร์หลังคำว่า `use` แล้วเลือก `+ Add` > `Tool` > `Create Meeting Follow-up Brief` หากหน้า Environment ไม่มี `+ Add` ให้พิมพ์ `/` แล้วเลือก Tool ชื่อเดียวกัน จากนั้นเลือก `Save`

   > การแทรก Tool reference ช่วยให้ Agent เชื่อม Instructions กับ Prompt Tool ที่สร้างไว้ แทนการอาศัยชื่อ Tool ที่พิมพ์เป็นข้อความธรรมดา

10. เปิด `Test your agent` เริ่มบทสนทนาใหม่ วาง [บันทึกประชุม Project Northstar](../resources/fictional-meeting-notes.md) แล้วถาม

    ```text
    ช่วยสรุป meeting notes นี้เป็น Decisions, Action items, Open questions และ Missing information
    ```

11. ตรวจว่า `participant FAQ` ไม่มี owner, `weekly leaderboard` ไม่อยู่ใน Decisions และข้อมูลที่ยังไม่ยืนยันถูกแยกไว้ให้ Review
12. เมื่อ meeting summary ถูกต้องแล้ว ที่เมนู `...` ของ `Test your agent` เปิด `Show activity map when testing`
13. ถามต่อในบทสนทนาเดิม

    ```text
    ช่วยสร้าง follow-up brief ให้หน่อย
    ```

14. ตรวจใน activity map ว่า Agent เรียก `Create Meeting Follow-up Brief` โดยใช้ meeting summary เป็น `MeetingSummary` และตรวจว่าผลลัพธ์มีครบหกส่วนตามลำดับ โดยไม่เพิ่มข้อมูลหรืออ้างว่าได้บันทึก ส่ง อนุมัติ หรือทำงานเสร็จแล้ว

> **Environment note:** ขั้นตอนทดสอบแบบสนทนานี้ต้องใช้ generative orchestration หาก Agent ไม่เลือก Tool ให้ตรวจการตั้งค่า Orchestration และยืนยันว่า Tool เปิดใช้งานอยู่ โดยไม่พยายามหลีกเลี่ยงนโยบายของ Environment

#### Pause and compare

- `Instructions` ควบคุมขอบเขตของ Agent
- `Knowledge` ให้บริบท
- Prompt Tool จัดผลลัพธ์ให้ใช้รูปแบบเดิมซ้ำได้

#### Checkpoint

- Tool สร้าง brief รูปแบบมาตรฐาน รักษาข้อมูลที่ขาด และไม่อ้างว่าทำ external action

## Summary

เราได้สร้าง Agent ตัวแรกครบเส้นทาง `Instruction → Knowledge → Prompt Tool → Human Review` ขั้นต่อไปเราจะใช้รูปแบบเดิมกับงานตรวจความพร้อมของเอกสาร claim ครับ

[กลับหน้าหลัก](../index.md) | [แบบฝึกหัดถัดไป สร้าง Claims Document Readiness Agent](./02-create-claims-document-readiness-agent.md)
