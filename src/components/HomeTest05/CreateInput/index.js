const CreateInput = ({name, onChange, onCreate}) => {
    return (
        <div>
            {/* button */}
            <div class="m20">
                <p>
                    Hiển thị thêm dữ liệu:&emsp;
                    <input id="insert" type="text" size="50" value={name} onChange={onChange} />

                    <button onClick={onCreate}>Insert</button>
                </p>
            </div>
        </div>
    )
}

export default CreateInput;

