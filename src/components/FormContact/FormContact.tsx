import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Editor, EditorState, convertToRaw, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
import { 
  TextBold,
  TextItalic,
  TextUnderline, 
} from 'iconsax-react';

interface FormData {
  title: string;
  content: string;
}

function FormContactComponent() {
  const { control, handleSubmit, register, formState: { errors } } = useForm<FormData>();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onSubmit = (data: FormData) => {
    const contentRaw = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
    console.log({ ...data, content: contentRaw }); 
  };

  const handleStyleToggle = (style: string) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  // const handleBlockTypeToggle = (blockType: string) => {
  //   setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  // };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='py-4'>
        <label className="block mb-2 lg:text-[20px] lg:font-[700] text-[16px] font-[500] text-black">หัวข้อกระทู้</label>
        <input className="w-full py-4 px-4 text-[#B6B6B6] rounded-[12px] border border-[#B6B6B6]" {...register('title', { required: 'Title is required' })} />
        {errors.title && <span>{errors.title.message}</span>}
      </div>

      <div className='py-4'>
        <label className="block mb-2 lg:text-[20px] lg:font-[700] text-[16px] font-[500] text-black">เนื้อหา</label>
        <Controller
          name="content"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <div className='rounded-[12px]' style={{ border: '1px solid #B6B6B6', padding: '0px', minHeight: '200px' }}>
              <div className="p-2 border-b border-[#B6B6B6]" style={{ marginBottom: '10px' }}>
                <button className="p-2" type="button" onClick={() => handleStyleToggle('BOLD')}><TextBold size="22" color="#000000"/></button>
                <button className="p-2" type="button" onClick={() => handleStyleToggle('ITALIC')}><TextItalic size="22" color="#000000"/></button>
                <button className="p-2" type="button" onClick={() => handleStyleToggle('UNDERLINE')}><TextUnderline size="22" color="#000000"/></button>
                {/* <button type="button" onClick={() => handleBlockTypeToggle('header-one')}>H1</button>
                <button type="button" onClick={() => handleBlockTypeToggle('header-two')}>H2</button>
                <button type="button" onClick={() => handleBlockTypeToggle('unordered-list-item')}>Bullet List</button>
                <button type="button" onClick={() => handleBlockTypeToggle('ordered-list-item')}>Numbered List</button> */}
              </div>
              <Editor
                editorState={editorState}
                onChange={(state) => {
                  setEditorState(state);
                  const contentRaw = JSON.stringify(convertToRaw(state.getCurrentContent()));
                  field.onChange(contentRaw); 
                }}
              />
            </div>
          )}
        />
        {errors.content && <span>{errors.content.message}</span>}
      </div>

      <div className='flex justify-center lg:justify-end py-4'>
        <button className='bg-[#A8AD00] rounded-[12px] px-[59px] py-[10px] font-[400] text-white text-[18px] lg:text-[24px]' type="submit">ส่ง</button>
      </div>
    </form>
  );
}

export default FormContactComponent;
