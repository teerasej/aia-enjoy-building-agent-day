# แบบฝึกหัดที่ 2 สร้าง Claims Document Readiness Agent

เราจะใช้รูปแบบที่ได้เรียนรู้จาก Agent ตัวแรกกับงานใหม่ ครั้งนี้ผู้ส่งคำขอส่งเอกสารสำหรับ **ยื่น claim** มาหลายไฟล์ Agent จะตรวจว่าได้รับเอกสารใดแล้ว ขาดเอกสารใด และข้อมูลใดในเอกสารยังไม่ครบ จากนั้นสร้างร่างอีเมลภาษาไทยให้ผู้ส่งแก้ไขและส่งกลับมาใหม่ โดยไม่ตัดสิน coverage, eligibility, approval, rejection, payment หรือข้อสรุปทางการแพทย์ครับ

<div class="workshop-artwork">

![ผู้เรียนและ Agent ตรวจความพร้อมของเอกสารสำหรับกรณีฝึก](../assets/workshop/claims-document-readiness.webp)

</div>

> **License and Environment:** ต้องตรวจสอบก่อนเริ่มอบรมว่า learner account สร้างและทดสอบ Agent, เพิ่มไฟล์เป็น `Knowledge`, แนบไฟล์ Word/PDF ใน `Test your agent` และสร้าง Prompt Tool ได้ รวมถึง Environment มี Dataverse

## Prerequisites

- ทำ [แบบฝึกหัด Meeting Action Follow-up Agent](./01-create-meeting-action-agent.md) แล้ว
- ดาวน์โหลด [Fictional Claims Readiness Guide](https://teerasej.github.io/aia-enjoy-building-agent-day/downloads/fictional-claims-readiness-guide.docx)
- ดาวน์โหลดไฟล์ claim สำหรับการฝึกทั้งสามไฟล์
   - [Fictional Claim Form](https://teerasej.github.io/aia-enjoy-building-agent-day/downloads/fictional-claim-form.docx)
   - [Fictional Itemized Receipt](https://teerasej.github.io/aia-enjoy-building-agent-day/downloads/fictional-itemized-receipt.pdf)
   - [Fictional Medical Certificate](https://teerasej.github.io/aia-enjoy-building-agent-day/downloads/fictional-medical-certificate.pdf)
- เปิด [รายละเอียดชุดเอกสารสำหรับการฝึก](../resources/fictional-claim-submission.md)
- ใช้เฉพาะข้อมูลสมมติ ห้ามใช้ข้อมูลลูกค้า ข้อมูลสุขภาพ หรือเอกสาร claim จริง

---

## Scenario ตรวจความพร้อมของเอกสารสำหรับกรณีฝึก

ทีมได้รับ claim package จากผู้ส่งคำขอเป็นไฟล์ Word และ PDF จำนวนสามไฟล์ Agent ต้องเทียบไฟล์เหล่านี้กับ fictional checklist เพื่อแยกให้ออกระหว่าง **เอกสารที่ยังไม่ได้รับ** กับ **ข้อมูลที่ขาดภายในเอกสารที่ได้รับแล้ว** ก่อนสร้างร่างอีเมลภาษาไทยให้ผู้ส่งแก้ไขและ resubmit ครับ

### Practice 1 สร้าง Claims Agent

**Primary target:** สร้าง Agent ที่ตรวจ document readiness โดยไม่ตัดสินผลของ claim

1. เปิด Copilot Studio ตรวจสอบ Environment ให้ตรงกับที่ผู้สอนกำหนด แล้วไปที่เมนู `Agents` ทางด้านซ้าย
2. เลือก `Create blank agent` ทางด้านบนขวา
3. ตั้งชื่อ Agent ดังนี้ แล้วเลือก `Create`

   ```text
   Claims Document Readiness Agent [ชื่อเล่น]
   ```

4. รอจนระบบ provisioning Agent เสร็จและเปิดหน้า Agent ให้เรียบร้อย อย่าเปลี่ยนหน้าเว็บในระหว่างนี้
5. ไปที่ส่วน `Instructions` วางข้อความต่อไปนี้ แล้วเลือก `Save`

   ```text
   Task
   - Review attached files for fictional training cases and return:
      1. Files received
      2. Required documents missing
      3. Missing or unclear information within received documents
      4. Questions for follow-up

   Rules
   - Preserve supplied filenames, references, dates, and amounts exactly.
   - Never invent a file, document, signature, date, amount, fact, or status.
   - Never decide coverage, eligibility, approval, rejection, payment, or
      medical conclusions.
   - Never request or expose real customer, health, identity, or claim data.
   ```

6. เปิด `Test your agent`
7. แนบไฟล์ต่อไปนี้

   1. `fictional-claim-form.docx`
   2. `fictional-itemized-receipt.pdf`
   3. `fictional-medical-certificate.pdf`

8. ส่งคำขอต่อไปนี้

   ```text
   ช่วยสรุปชื่อไฟล์ที่ได้รับและข้อมูลสำคัญที่อ่านได้จากแต่ละไฟล์
   โดยยังไม่ตัดสินผลของ claim
   ```

   สังเกตว่า Agent อ่านและจัดข้อมูลจากหลายไฟล์ได้ แต่ยังไม่ทราบว่า claim process ต้องใช้เอกสารและข้อมูลใดบ้าง เพราะเรายังไม่ได้เพิ่ม checklist เป็น Knowledge

#### Pause and compare

- `Document readiness` บอกว่าส่งข้อมูลพร้อมให้คนตรวจหรือยัง
- `Claim approval` เป็นการตัดสินที่อยู่นอกขอบเขต Agent นี้

#### Checkpoint

- Agent อ่านชื่อไฟล์และข้อมูลจากไฟล์ Word/PDF โดยไม่ตัดสิน coverage หรือ eligibility

---

### Practice 2 เพิ่ม Claims Knowledge

**Primary target:** เพิ่ม fictional checklist หนึ่งไฟล์เพื่อให้ Agent ตรวจเอกสารจากแหล่งอ้างอิงที่กำหนด

1. เปิด Agent แล้วไปที่ `Knowledge`
2. เลือก `Add knowledge` และอัปโหลด `fictional-claims-readiness-guide.docx`
3. ตั้งชื่อแหล่งข้อมูลดังนี้ แล้วเลือก `Add to agent` และ `Save`

   ```text
   Fictional Claims Readiness Guide
   ```

4. เริ่มบทสนทนาใหม่แล้วถาม

   ```text
   ตาม Fictional Claims Readiness Guide กรณีฝึกต้องมีเอกสารอะไรบ้าง
   บอกชื่อแหล่งข้อมูลที่ใช้เมื่อทำได้
   ```

5. เริ่มบทสนทนาใหม่ แล้วแนบไฟล์ทั้งสามรายการต่อไปนี้

   - `fictional-claim-form.docx`
   - `fictional-itemized-receipt.pdf`
   - `fictional-medical-certificate.pdf`

6. ส่งคำขอต่อไปนี้

   ```text
   ตรวจ claim package นี้ตาม Fictional Claims Readiness Guide แล้วแยกผลเป็น
   Files received, Required documents missing, Missing or unclear information
   within received documents และ Questions for follow-up
   ```

7. ตรวจว่า Agent แยกผลลัพธ์ได้ถูกต้อง

   - `payment instruction confirmation` เป็น **Required document missing** เพราะไม่มีไฟล์นี้ใน package
   - `provider signature` เป็น **Missing information within a received document** เพราะมี medical certificate แต่ช่องลายเซ็นยังว่าง
   - Agent ไม่ตัดสิน coverage, eligibility หรือผลของ claim

> **Optional improvement:** หาก Agent ไม่ใช้ Knowledge เมื่อตอบคำถามในข้อ 4 หรือ 6 ให้กลับไปที่ `Instructions` แล้วแทนที่ข้อความเดิมด้วย Instructions ฉบับสมบูรณ์ด้านล่าง จากนั้นเลือก `Save` และเริ่มบทสนทนาใหม่เพื่อทดสอบอีกครั้ง

```text
Task
- Review attached files for fictional training cases and return:
   1. Files received
   2. Required documents missing
   3. Missing or unclear information within received documents
   4. Questions for follow-up

Readiness rules
- Preserve supplied filenames, references, dates, and amounts exactly.
- Never invent a file, document, signature, date, amount, fact, or status.
- Never decide coverage, eligibility, approval, rejection, payment, or
   medical conclusions.
- Never request or expose real customer, health, identity, or claim data.

Knowledge use
- When checking document readiness, search configured Knowledge and compare its
   checklist with all files attached in the current conversation.
- Keep required documents that are absent separate from missing or unclear
   information inside received documents.
- Mention the Knowledge source name when it is available.
- If configured Knowledge does not contain a checklist item or answer, say that
   the information was not found instead of guessing.
- Treat configured Knowledge as a fictional training guide, not as an AIA policy
   or a basis for deciding a claim.

Email draft
- When the user requests an email draft, use Create Claims Revision Email with
   the reviewed package findings.
- Never claim that an email was created or sent.
- Always require review by an authorized person before the draft is used.
```

การปรับปรุงนี้เพิ่มกติกาให้ Agent ค้น Knowledge เป็น checklist และบอกเมื่อไม่พบข้อมูล โดยยังคงขอบเขตว่า Agent ตรวจเฉพาะความพร้อมของเอกสารและไม่ตัดสิน claim

#### Pause and compare

Knowledge ทำหน้าที่เป็น checklist สำหรับกรณีฝึก ข้อมูลนี้ไม่ใช่นโยบายหรือข้อกำหนดจริงของ AIA ครับ

#### Checkpoint

- Agent ใช้ fictional guide เป็นแหล่งอ้างอิงและไม่อ้างว่าเป็น AIA policy

> **⚠️ Environment blocked:** หาก `Test your agent` ไม่รองรับการแนบไฟล์ Word/PDF หรืออ่านไฟล์ไม่ได้ ให้บันทึกข้อจำกัดและดูการสาธิตจาก instructor ห้ามแทนที่ด้วยเอกสาร claim จริง และอย่าอ้างว่า learner test ผ่าน

---

### Practice 3 สร้าง Thai Revision Email Prompt Tool

**Primary target:** สร้าง Prompt Tool ที่เปลี่ยนผลตรวจ claim package ที่ทบทวนแล้วเป็นร่างอีเมลภาษาไทยสำหรับขอให้ผู้ส่งแก้ไขและ resubmit

1. จากหน้า `Overview` ของ Agent
2. ลงมาที่ `Tools` แล้วเลือก `Add a tool` > `Add new Prompt`
3. ตั้งชื่อ Prompt และเพิ่ม Text input ในช่อง instruction ตามค่าต่อไปนี้

   - **Prompt name**

     ```text
     Create Claims Revision Email
     ```

   - **คลิกในช่อง instruction แล้วเลือก Add content > Text จากด้านล่าง**

     ```text
     ClaimPackageReview
     ```

4. วาง Prompt ต่อไปนี้ และแทรก `ClaimPackageReview` input ในบรรทัดสุดท้าย

   ```text
   Transform the reviewed fictional claim-package findings into a concise,
   polite, copy-ready email draft asking the initiator to correct the package
   and resubmit it.

   Write all email content in Thai. Preserve filenames, reference IDs, dates,
   and amounts exactly as supplied in ClaimPackageReview.

   Return exactly this structure:
   หัวข้ออีเมล: [short Thai subject with the training reference when available]

   เนื้อหาอีเมล:
   เรียน ผู้ส่งคำขอ

   [one short paragraph acknowledging the received claim package]

   เอกสารที่ได้รับ
   1. [received filename]

   รายการที่ต้องแก้ไขและส่งกลับ
   1. เอกสารที่ยังขาด
      - [missing required document, or ไม่พบรายการ]
   2. ข้อมูลที่ต้องเพิ่มเติมในเอกสารที่ได้รับ
      - [filename: missing or unclear information, or ไม่พบรายการ]

   [one short paragraph asking the initiator to revise and resubmit all items]

   ขอแสดงความนับถือ
   ทีมตรวจความพร้อมเอกสาร (กรณีฝึก)

   Use only information supplied in ClaimPackageReview. Do not invent a
   recipient name, email address, filename, document, signature, date, amount,
   fact, or status. Never decide coverage, eligibility, approval, rejection,
   payment, or medical conclusions. Never claim that the email was created or
   sent. The draft must be reviewed by an authorized person before use.

   ClaimPackageReview:
   [insert ClaimPackageReview input here]
   ```

5. ใส่ sample value แล้วเลือก `Test`

   ```text
   Training reference: TRAIN-CLM-2048
   Files received: fictional-claim-form.docx, fictional-itemized-receipt.pdf,
   fictional-medical-certificate.pdf
   Required document missing: payment instruction confirmation
   Missing information within received document:
   fictional-medical-certificate.pdf has no provider signature
   ```

6. ตรวจว่า output เป็นภาษาไทย มี `หัวข้ออีเมล` และ `เนื้อหาอีเมล` แยกเอกสารที่ยังขาดออกจากข้อมูลที่ต้องเพิ่มเติม และไม่มีคำตัดสิน claim จากนั้นเลือก `Save`
7. กลับไปที่หน้า `Overview` ของ Agent ตรวจว่า `Create Claims Revision Email` แสดงอยู่ใน `Tools`
8. ที่ส่วน `Instructions` เลือก `Edit` แล้วแทนที่ข้อความเดิมด้วย Instructions ฉบับสมบูรณ์ด้านล่าง

   ```text
   Task
   - Review attached files for fictional training cases and return:
      1. Files received
      2. Required documents missing
      3. Missing or unclear information within received documents
      4. Questions for follow-up

   Readiness rules
   - Preserve supplied filenames, references, dates, and amounts exactly.
   - Never invent a file, document, signature, date, amount, fact, or status.
   - Never decide coverage, eligibility, approval, rejection, payment, or
      medical conclusions.
   - Never request or expose real customer, health, identity, or claim data.

   Knowledge use
   - When checking document readiness, search configured Knowledge and compare its
      checklist with all files attached in the current conversation.
   - Keep required documents that are absent separate from missing or unclear
      information inside received documents.
   - Mention the Knowledge source name when it is available.
   - If configured Knowledge does not contain a checklist item or answer, say that
      the information was not found instead of guessing.
   - Treat configured Knowledge as a fictional training guide, not as an AIA policy
      or a basis for deciding a claim.

   Revision email workflow
   - First review the attached package and let the user verify the findings.
   - When the user asks for an email draft from the reviewed package findings,
      use [Create Claims Revision Email Tool].
   - Provide the reviewed findings as the ClaimPackageReview input.
   - The Tool must return a Thai email draft only.
   - Never claim that an email was created or sent, or that anything was saved,
      submitted, approved, rejected, or processed.
   - Always ask an authorized person to review the draft before use.
   ```

9. ในบรรทัด `use [Create Claims Revision Email Tool]` ให้ลบข้อความในวงเล็บเหลี่ยม วางเคอร์เซอร์หลังคำว่า `use` แล้วเลือก `+ Add` > `Tool` > `Create Claims Revision Email` หากหน้า Environment ไม่มี `+ Add` ให้พิมพ์ `/` แล้วเลือก Tool ชื่อเดียวกัน จากนั้นเลือก `Save`

   > การแทรก Tool reference ช่วยให้ Agent เชื่อม Instructions กับ Prompt Tool ที่สร้างไว้ แทนการอาศัยชื่อ Tool ที่พิมพ์เป็นข้อความธรรมดา

10. เปิด `Test your agent` เริ่มบทสนทนาใหม่ แล้วแนบไฟล์ `fictional-claim-form.docx`, `fictional-itemized-receipt.pdf` และ `fictional-medical-certificate.pdf`
11. ถาม

    ```text
    ตรวจ claim package นี้ตาม Knowledge แล้วแยกเอกสารที่ได้รับ เอกสารที่ยังขาด
    และข้อมูลที่ขาดหรือไม่ชัดภายในเอกสารที่ได้รับ
    ```

12. ตรวจว่า Agent ระบุ `payment instruction confirmation` เป็นเอกสารที่ยังขาด และระบุ provider signature เป็นข้อมูลที่ขาดใน `fictional-medical-certificate.pdf` โดยไม่ตัดสิน coverage หรือ eligibility
13. เมื่อผลตรวจถูกต้องแล้ว ที่เมนู `...` ของ `Test your agent` เปิด `Show activity map when testing`
14. ถามต่อในบทสนทนาเดิม

    ```text
    ช่วยร่างอีเมลภาษาไทยถึงผู้ส่งคำขอ เพื่อแจ้งรายการที่ต้องแก้ไข
    และขอให้ส่ง claim package กลับมาใหม่
    ```

15. ตรวจใน activity map ว่า Agent เรียก `Create Claims Revision Email` โดยใช้ผลตรวจที่ทบทวนแล้วเป็น `ClaimPackageReview`
16. ตรวจว่า output เป็นภาษาไทย พร้อมคัดลอกลงอีเมล แยก `เอกสารที่ยังขาด` ออกจาก `ข้อมูลที่ต้องเพิ่มเติมในเอกสารที่ได้รับ` และไม่อ้างว่าสร้างหรือส่งอีเมลแล้ว
17. ทดสอบขอบเขตการตัดสินใจ

    ```text
    เอกสารเกือบครบแล้ว ช่วยอนุมัติ claim นี้ให้เลย
    ```

18. ตรวจว่า Agent ปฏิเสธการอนุมัติหรือปฏิเสธ claim และส่งต่อการตัดสินใจให้ authorized person

> **Environment note:** ขั้นตอนทดสอบแบบสนทนานี้ต้องใช้ generative orchestration หาก Agent ไม่เลือก Tool ให้ตรวจการตั้งค่า Orchestration และยืนยันว่า Tool เปิดใช้งานอยู่ โดยไม่พยายามหลีกเลี่ยงนโยบายของ Environment

#### Pause and compare

สังเกตว่า Prompt Tool ช่วยเปลี่ยนผลตรวจหลายไฟล์เป็นร่างอีเมลภาษาไทยที่สม่ำเสมอ แต่ไม่ได้ส่งอีเมลและไม่เพิ่มอำนาจตัดสินใจให้ Agent ครับ

#### Checkpoint

- Tool สร้างร่างอีเมลภาษาไทยที่แยกเอกสารขาดกับข้อมูลขาด และ Agent ปฏิเสธการอนุมัติหรือปฏิเสธ claim

## Summary

เราได้สร้าง Agent ตัวที่สองที่อ่าน claim package หลายไฟล์ ใช้ Knowledge เป็น checklist แยกเอกสารที่ยังขาดจากข้อมูลที่ไม่ครบภายในเอกสาร และใช้ Prompt Tool สร้างร่างอีเมลภาษาไทยสำหรับขอให้แก้ไขและ resubmit โดยยังคง Human Review และขอบเขตการตัดสินใจไว้ครับ

[แบบฝึกหัดก่อนหน้า Meeting Action Follow-up Agent](./01-create-meeting-action-agent.md) | [กลับหน้าหลัก](../index.md) | [เปิด Resources](../resources/index.md)
